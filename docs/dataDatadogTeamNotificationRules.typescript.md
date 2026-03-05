# `dataDatadogTeamNotificationRules` Submodule <a name="`dataDatadogTeamNotificationRules` Submodule" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamNotificationRules <a name="DataDatadogTeamNotificationRules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/team_notification_rules datadog_team_notification_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

new dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules(scope: Construct, id: string, config: DataDatadogTeamNotificationRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig">DataDatadogTeamNotificationRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig">DataDatadogTeamNotificationRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.putNotificationRules">putNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.resetNotificationRules">resetNotificationRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNotificationRules` <a name="putNotificationRules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.putNotificationRules"></a>

```typescript
public putNotificationRules(value: IResolvable | DataDatadogTeamNotificationRulesNotificationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.putNotificationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>[]

---

##### `resetNotificationRules` <a name="resetNotificationRules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.resetNotificationRules"></a>

```typescript
public resetNotificationRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogTeamNotificationRules resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isConstruct"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformElement"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformDataSource"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogTeamNotificationRules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogTeamNotificationRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogTeamNotificationRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/team_notification_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamNotificationRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.notificationRules">notificationRules</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList">DataDatadogTeamNotificationRulesNotificationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.notificationRulesInput">notificationRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationRules`<sup>Required</sup> <a name="notificationRules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.notificationRules"></a>

```typescript
public readonly notificationRules: DataDatadogTeamNotificationRulesNotificationRulesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList">DataDatadogTeamNotificationRulesNotificationRulesList</a>

---

##### `notificationRulesInput`<sup>Optional</sup> <a name="notificationRulesInput" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.notificationRulesInput"></a>

```typescript
public readonly notificationRulesInput: IResolvable | DataDatadogTeamNotificationRulesNotificationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>[]

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamNotificationRulesConfig <a name="DataDatadogTeamNotificationRulesConfig" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

const dataDatadogTeamNotificationRulesConfig: dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.teamId">teamId</a></code> | <code>string</code> | The team ID to fetch notification rules for. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.notificationRules">notificationRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>[]</code> | notification_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The team ID to fetch notification rules for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/team_notification_rules#team_id DataDatadogTeamNotificationRules#team_id}

---

##### `notificationRules`<sup>Optional</sup> <a name="notificationRules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.notificationRules"></a>

```typescript
public readonly notificationRules: IResolvable | DataDatadogTeamNotificationRulesNotificationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>[]

notification_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/team_notification_rules#notification_rules DataDatadogTeamNotificationRules#notification_rules}

---

### DataDatadogTeamNotificationRulesNotificationRules <a name="DataDatadogTeamNotificationRulesNotificationRules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

const dataDatadogTeamNotificationRulesNotificationRules: dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules = { ... }
```


### DataDatadogTeamNotificationRulesNotificationRulesEmail <a name="DataDatadogTeamNotificationRulesNotificationRulesEmail" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmail.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

const dataDatadogTeamNotificationRulesNotificationRulesEmail: dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmail = { ... }
```


### DataDatadogTeamNotificationRulesNotificationRulesMsTeams <a name="DataDatadogTeamNotificationRulesNotificationRulesMsTeams" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeams.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

const dataDatadogTeamNotificationRulesNotificationRulesMsTeams: dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeams = { ... }
```


### DataDatadogTeamNotificationRulesNotificationRulesPagerduty <a name="DataDatadogTeamNotificationRulesNotificationRulesPagerduty" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerduty.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

const dataDatadogTeamNotificationRulesNotificationRulesPagerduty: dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerduty = { ... }
```


### DataDatadogTeamNotificationRulesNotificationRulesSlack <a name="DataDatadogTeamNotificationRulesNotificationRulesSlack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlack.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

const dataDatadogTeamNotificationRulesNotificationRulesSlack: dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlack = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference <a name="DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

new dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmail">DataDatadogTeamNotificationRulesNotificationRulesEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogTeamNotificationRulesNotificationRulesEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmail">DataDatadogTeamNotificationRulesNotificationRulesEmail</a>

---


### DataDatadogTeamNotificationRulesNotificationRulesList <a name="DataDatadogTeamNotificationRulesNotificationRulesList" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

new dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.get"></a>

```typescript
public get(index: number): DataDatadogTeamNotificationRulesNotificationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogTeamNotificationRulesNotificationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>[]

---


### DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference <a name="DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

new dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.connectorName">connectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeams">DataDatadogTeamNotificationRulesNotificationRulesMsTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogTeamNotificationRulesNotificationRulesMsTeams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeams">DataDatadogTeamNotificationRulesNotificationRulesMsTeams</a>

---


### DataDatadogTeamNotificationRulesNotificationRulesOutputReference <a name="DataDatadogTeamNotificationRulesNotificationRulesOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

new dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference">DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.msTeams">msTeams</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference">DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference">DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference">DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.email"></a>

```typescript
public readonly email: DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference">DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `msTeams`<sup>Required</sup> <a name="msTeams" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.msTeams"></a>

```typescript
public readonly msTeams: DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference">DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.pagerduty"></a>

```typescript
public readonly pagerduty: DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference">DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.slack"></a>

```typescript
public readonly slack: DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference">DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogTeamNotificationRulesNotificationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>

---


### DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference <a name="DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

new dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerduty">DataDatadogTeamNotificationRulesNotificationRulesPagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogTeamNotificationRulesNotificationRulesPagerduty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerduty">DataDatadogTeamNotificationRulesNotificationRulesPagerduty</a>

---


### DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference <a name="DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.Initializer"></a>

```typescript
import { dataDatadogTeamNotificationRules } from '@cdktn/provider-datadog'

new dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.workspace">workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlack">DataDatadogTeamNotificationRulesNotificationRulesSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogTeamNotificationRulesNotificationRulesSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlack">DataDatadogTeamNotificationRulesNotificationRulesSlack</a>

---



