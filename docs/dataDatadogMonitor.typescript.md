# `dataDatadogMonitor` Submodule <a name="`dataDatadogMonitor` Submodule" id="@cdktn/provider-datadog.dataDatadogMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogMonitor <a name="DataDatadogMonitor" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/monitor datadog_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitor(scope: Construct, id: string, config?: DataDatadogMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig">DataDatadogMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig">DataDatadogMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.resetMonitorTagsFilter">resetMonitorTagsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.resetNameFilter">resetNameFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.resetTagsFilter">resetTagsFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMonitorTagsFilter` <a name="resetMonitorTagsFilter" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.resetMonitorTagsFilter"></a>

```typescript
public resetMonitorTagsFilter(): void
```

##### `resetNameFilter` <a name="resetNameFilter" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.resetNameFilter"></a>

```typescript
public resetNameFilter(): void
```

##### `resetTagsFilter` <a name="resetTagsFilter" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.resetTagsFilter"></a>

```typescript
public resetTagsFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.isConstruct"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

dataDatadogMonitor.DataDatadogMonitor.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.isTerraformElement"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

dataDatadogMonitor.DataDatadogMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.isTerraformDataSource"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

dataDatadogMonitor.DataDatadogMonitor.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.generateConfigForImport"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

dataDatadogMonitor.DataDatadogMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.enableLogsSample">enableLogsSample</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.enableSamples">enableSamples</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.escalationMessage">escalationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.evaluationDelay">evaluationDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.groupbySimpleMonitor">groupbySimpleMonitor</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.groupRetentionDuration">groupRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.includeTags">includeTags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.monitorThresholds">monitorThresholds</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList">DataDatadogMonitorMonitorThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.monitorThresholdWindows">monitorThresholdWindows</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList">DataDatadogMonitorMonitorThresholdWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.newGroupDelay">newGroupDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.newHostDelay">newHostDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.noDataTimeframe">noDataTimeframe</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.notificationPresetName">notificationPresetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.notifyAudit">notifyAudit</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.notifyBy">notifyBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.notifyNoData">notifyNoData</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.onMissingData">onMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.renotifyInterval">renotifyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.renotifyOccurrences">renotifyOccurrences</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.renotifyStatuses">renotifyStatuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.requireFullWindow">requireFullWindow</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.restrictedRoles">restrictedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.schedulingOptions">schedulingOptions</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList">DataDatadogMonitorSchedulingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.timeoutH">timeoutH</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.monitorTagsFilterInput">monitorTagsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.nameFilterInput">nameFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.tagsFilterInput">tagsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.monitorTagsFilter">monitorTagsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.nameFilter">nameFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.tagsFilter">tagsFilter</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `enableLogsSample`<sup>Required</sup> <a name="enableLogsSample" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.enableLogsSample"></a>

```typescript
public readonly enableLogsSample: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableSamples`<sup>Required</sup> <a name="enableSamples" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.enableSamples"></a>

```typescript
public readonly enableSamples: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `escalationMessage`<sup>Required</sup> <a name="escalationMessage" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.escalationMessage"></a>

```typescript
public readonly escalationMessage: string;
```

- *Type:* string

---

##### `evaluationDelay`<sup>Required</sup> <a name="evaluationDelay" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.evaluationDelay"></a>

```typescript
public readonly evaluationDelay: number;
```

- *Type:* number

---

##### `groupbySimpleMonitor`<sup>Required</sup> <a name="groupbySimpleMonitor" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.groupbySimpleMonitor"></a>

```typescript
public readonly groupbySimpleMonitor: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `groupRetentionDuration`<sup>Required</sup> <a name="groupRetentionDuration" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.groupRetentionDuration"></a>

```typescript
public readonly groupRetentionDuration: string;
```

- *Type:* string

---

##### `includeTags`<sup>Required</sup> <a name="includeTags" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.includeTags"></a>

```typescript
public readonly includeTags: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `monitorThresholds`<sup>Required</sup> <a name="monitorThresholds" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.monitorThresholds"></a>

```typescript
public readonly monitorThresholds: DataDatadogMonitorMonitorThresholdsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList">DataDatadogMonitorMonitorThresholdsList</a>

---

##### `monitorThresholdWindows`<sup>Required</sup> <a name="monitorThresholdWindows" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.monitorThresholdWindows"></a>

```typescript
public readonly monitorThresholdWindows: DataDatadogMonitorMonitorThresholdWindowsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList">DataDatadogMonitorMonitorThresholdWindowsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `newGroupDelay`<sup>Required</sup> <a name="newGroupDelay" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.newGroupDelay"></a>

```typescript
public readonly newGroupDelay: number;
```

- *Type:* number

---

##### `newHostDelay`<sup>Required</sup> <a name="newHostDelay" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.newHostDelay"></a>

```typescript
public readonly newHostDelay: number;
```

- *Type:* number

---

##### `noDataTimeframe`<sup>Required</sup> <a name="noDataTimeframe" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.noDataTimeframe"></a>

```typescript
public readonly noDataTimeframe: number;
```

- *Type:* number

---

##### `notificationPresetName`<sup>Required</sup> <a name="notificationPresetName" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.notificationPresetName"></a>

```typescript
public readonly notificationPresetName: string;
```

- *Type:* string

---

##### `notifyAudit`<sup>Required</sup> <a name="notifyAudit" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.notifyAudit"></a>

```typescript
public readonly notifyAudit: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `notifyBy`<sup>Required</sup> <a name="notifyBy" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.notifyBy"></a>

```typescript
public readonly notifyBy: string[];
```

- *Type:* string[]

---

##### `notifyNoData`<sup>Required</sup> <a name="notifyNoData" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.notifyNoData"></a>

```typescript
public readonly notifyNoData: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `onMissingData`<sup>Required</sup> <a name="onMissingData" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.onMissingData"></a>

```typescript
public readonly onMissingData: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `renotifyInterval`<sup>Required</sup> <a name="renotifyInterval" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.renotifyInterval"></a>

```typescript
public readonly renotifyInterval: number;
```

- *Type:* number

---

##### `renotifyOccurrences`<sup>Required</sup> <a name="renotifyOccurrences" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.renotifyOccurrences"></a>

```typescript
public readonly renotifyOccurrences: number;
```

- *Type:* number

---

##### `renotifyStatuses`<sup>Required</sup> <a name="renotifyStatuses" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.renotifyStatuses"></a>

```typescript
public readonly renotifyStatuses: string[];
```

- *Type:* string[]

---

##### `requireFullWindow`<sup>Required</sup> <a name="requireFullWindow" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.requireFullWindow"></a>

```typescript
public readonly requireFullWindow: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `restrictedRoles`<sup>Required</sup> <a name="restrictedRoles" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.restrictedRoles"></a>

```typescript
public readonly restrictedRoles: string[];
```

- *Type:* string[]

---

##### `schedulingOptions`<sup>Required</sup> <a name="schedulingOptions" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.schedulingOptions"></a>

```typescript
public readonly schedulingOptions: DataDatadogMonitorSchedulingOptionsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList">DataDatadogMonitorSchedulingOptionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `timeoutH`<sup>Required</sup> <a name="timeoutH" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.timeoutH"></a>

```typescript
public readonly timeoutH: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monitorTagsFilterInput`<sup>Optional</sup> <a name="monitorTagsFilterInput" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.monitorTagsFilterInput"></a>

```typescript
public readonly monitorTagsFilterInput: string[];
```

- *Type:* string[]

---

##### `nameFilterInput`<sup>Optional</sup> <a name="nameFilterInput" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.nameFilterInput"></a>

```typescript
public readonly nameFilterInput: string;
```

- *Type:* string

---

##### `tagsFilterInput`<sup>Optional</sup> <a name="tagsFilterInput" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.tagsFilterInput"></a>

```typescript
public readonly tagsFilterInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitorTagsFilter`<sup>Required</sup> <a name="monitorTagsFilter" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.monitorTagsFilter"></a>

```typescript
public readonly monitorTagsFilter: string[];
```

- *Type:* string[]

---

##### `nameFilter`<sup>Required</sup> <a name="nameFilter" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.nameFilter"></a>

```typescript
public readonly nameFilter: string;
```

- *Type:* string

---

##### `tagsFilter`<sup>Required</sup> <a name="tagsFilter" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.tagsFilter"></a>

```typescript
public readonly tagsFilter: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogMonitorConfig <a name="DataDatadogMonitorConfig" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

const dataDatadogMonitorConfig: dataDatadogMonitor.DataDatadogMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/monitor#id DataDatadogMonitor#id}. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.monitorTagsFilter">monitorTagsFilter</a></code> | <code>string[]</code> | A list of monitor tags to limit the search. This filters on the tags set on the monitor itself. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.nameFilter">nameFilter</a></code> | <code>string</code> | A monitor name to limit the search. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.tagsFilter">tagsFilter</a></code> | <code>string[]</code> | A list of tags to limit the search. This filters on the monitor scope. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/monitor#id DataDatadogMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitorTagsFilter`<sup>Optional</sup> <a name="monitorTagsFilter" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.monitorTagsFilter"></a>

```typescript
public readonly monitorTagsFilter: string[];
```

- *Type:* string[]

A list of monitor tags to limit the search. This filters on the tags set on the monitor itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/monitor#monitor_tags_filter DataDatadogMonitor#monitor_tags_filter}

---

##### `nameFilter`<sup>Optional</sup> <a name="nameFilter" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.nameFilter"></a>

```typescript
public readonly nameFilter: string;
```

- *Type:* string

A monitor name to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/monitor#name_filter DataDatadogMonitor#name_filter}

---

##### `tagsFilter`<sup>Optional</sup> <a name="tagsFilter" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorConfig.property.tagsFilter"></a>

```typescript
public readonly tagsFilter: string[];
```

- *Type:* string[]

A list of tags to limit the search. This filters on the monitor scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/monitor#tags_filter DataDatadogMonitor#tags_filter}

---

### DataDatadogMonitorMonitorThresholds <a name="DataDatadogMonitorMonitorThresholds" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholds.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

const dataDatadogMonitorMonitorThresholds: dataDatadogMonitor.DataDatadogMonitorMonitorThresholds = { ... }
```


### DataDatadogMonitorMonitorThresholdWindows <a name="DataDatadogMonitorMonitorThresholdWindows" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindows.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

const dataDatadogMonitorMonitorThresholdWindows: dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindows = { ... }
```


### DataDatadogMonitorSchedulingOptions <a name="DataDatadogMonitorSchedulingOptions" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptions.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

const dataDatadogMonitorSchedulingOptions: dataDatadogMonitor.DataDatadogMonitorSchedulingOptions = { ... }
```


### DataDatadogMonitorSchedulingOptionsCustomSchedule <a name="DataDatadogMonitorSchedulingOptionsCustomSchedule" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomSchedule.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

const dataDatadogMonitorSchedulingOptionsCustomSchedule: dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomSchedule = { ... }
```


### DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence <a name="DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

const dataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence: dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence = { ... }
```


### DataDatadogMonitorSchedulingOptionsEvaluationWindow <a name="DataDatadogMonitorSchedulingOptionsEvaluationWindow" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindow.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

const dataDatadogMonitorSchedulingOptionsEvaluationWindow: dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindow = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogMonitorMonitorThresholdsList <a name="DataDatadogMonitorMonitorThresholdsList" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.get"></a>

```typescript
public get(index: number): DataDatadogMonitorMonitorThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogMonitorMonitorThresholdsOutputReference <a name="DataDatadogMonitorMonitorThresholdsOutputReference" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.critical">critical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.criticalRecovery">criticalRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.ok">ok</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.unknown">unknown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.warning">warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.warningRecovery">warningRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholds">DataDatadogMonitorMonitorThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.critical"></a>

```typescript
public readonly critical: string;
```

- *Type:* string

---

##### `criticalRecovery`<sup>Required</sup> <a name="criticalRecovery" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.criticalRecovery"></a>

```typescript
public readonly criticalRecovery: string;
```

- *Type:* string

---

##### `ok`<sup>Required</sup> <a name="ok" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.ok"></a>

```typescript
public readonly ok: string;
```

- *Type:* string

---

##### `unknown`<sup>Required</sup> <a name="unknown" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.unknown"></a>

```typescript
public readonly unknown: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

---

##### `warningRecovery`<sup>Required</sup> <a name="warningRecovery" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.warningRecovery"></a>

```typescript
public readonly warningRecovery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogMonitorMonitorThresholds;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholds">DataDatadogMonitorMonitorThresholds</a>

---


### DataDatadogMonitorMonitorThresholdWindowsList <a name="DataDatadogMonitorMonitorThresholdWindowsList" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.get"></a>

```typescript
public get(index: number): DataDatadogMonitorMonitorThresholdWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogMonitorMonitorThresholdWindowsOutputReference <a name="DataDatadogMonitorMonitorThresholdWindowsOutputReference" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow">recoveryWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.property.triggerWindow">triggerWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindows">DataDatadogMonitorMonitorThresholdWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recoveryWindow`<sup>Required</sup> <a name="recoveryWindow" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow"></a>

```typescript
public readonly recoveryWindow: string;
```

- *Type:* string

---

##### `triggerWindow`<sup>Required</sup> <a name="triggerWindow" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.property.triggerWindow"></a>

```typescript
public readonly triggerWindow: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogMonitorMonitorThresholdWindows;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorMonitorThresholdWindows">DataDatadogMonitorMonitorThresholdWindows</a>

---


### DataDatadogMonitorSchedulingOptionsCustomScheduleList <a name="DataDatadogMonitorSchedulingOptionsCustomScheduleList" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.get"></a>

```typescript
public get(index: number): DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference <a name="DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList">DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomSchedule">DataDatadogMonitorSchedulingOptionsCustomSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence"></a>

```typescript
public readonly recurrence: DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList">DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogMonitorSchedulingOptionsCustomSchedule;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomSchedule">DataDatadogMonitorSchedulingOptionsCustomSchedule</a>

---


### DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList <a name="DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.get"></a>

```typescript
public get(index: number): DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference <a name="DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule">rrule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence">DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence">DataDatadogMonitorSchedulingOptionsCustomScheduleRecurrence</a>

---


### DataDatadogMonitorSchedulingOptionsEvaluationWindowList <a name="DataDatadogMonitorSchedulingOptionsEvaluationWindowList" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.get"></a>

```typescript
public get(index: number): DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference <a name="DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts">dayStarts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts">hourStarts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts">monthStarts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindow">DataDatadogMonitorSchedulingOptionsEvaluationWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayStarts`<sup>Required</sup> <a name="dayStarts" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts"></a>

```typescript
public readonly dayStarts: string;
```

- *Type:* string

---

##### `hourStarts`<sup>Required</sup> <a name="hourStarts" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts"></a>

```typescript
public readonly hourStarts: number;
```

- *Type:* number

---

##### `monthStarts`<sup>Required</sup> <a name="monthStarts" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts"></a>

```typescript
public readonly monthStarts: number;
```

- *Type:* number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogMonitorSchedulingOptionsEvaluationWindow;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindow">DataDatadogMonitorSchedulingOptionsEvaluationWindow</a>

---


### DataDatadogMonitorSchedulingOptionsList <a name="DataDatadogMonitorSchedulingOptionsList" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.get"></a>

```typescript
public get(index: number): DataDatadogMonitorSchedulingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogMonitorSchedulingOptionsOutputReference <a name="DataDatadogMonitorSchedulingOptionsOutputReference" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.Initializer"></a>

```typescript
import { dataDatadogMonitor } from '@cdktn/provider-datadog'

new dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.property.customSchedule">customSchedule</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList">DataDatadogMonitorSchedulingOptionsCustomScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.property.evaluationWindow">evaluationWindow</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList">DataDatadogMonitorSchedulingOptionsEvaluationWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptions">DataDatadogMonitorSchedulingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customSchedule`<sup>Required</sup> <a name="customSchedule" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.property.customSchedule"></a>

```typescript
public readonly customSchedule: DataDatadogMonitorSchedulingOptionsCustomScheduleList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsCustomScheduleList">DataDatadogMonitorSchedulingOptionsCustomScheduleList</a>

---

##### `evaluationWindow`<sup>Required</sup> <a name="evaluationWindow" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.property.evaluationWindow"></a>

```typescript
public readonly evaluationWindow: DataDatadogMonitorSchedulingOptionsEvaluationWindowList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsEvaluationWindowList">DataDatadogMonitorSchedulingOptionsEvaluationWindowList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogMonitorSchedulingOptions;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogMonitor.DataDatadogMonitorSchedulingOptions">DataDatadogMonitorSchedulingOptions</a>

---



