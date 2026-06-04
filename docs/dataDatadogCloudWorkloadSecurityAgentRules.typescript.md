# `dataDatadogCloudWorkloadSecurityAgentRules` Submodule <a name="`dataDatadogCloudWorkloadSecurityAgentRules` Submodule" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCloudWorkloadSecurityAgentRules <a name="DataDatadogCloudWorkloadSecurityAgentRules" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/cloud_workload_security_agent_rules datadog_cloud_workload_security_agent_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer"></a>

```typescript
import { dataDatadogCloudWorkloadSecurityAgentRules } from '@cdktn/provider-datadog'

new dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules(scope: Construct, id: string, config?: DataDatadogCloudWorkloadSecurityAgentRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig">DataDatadogCloudWorkloadSecurityAgentRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig">DataDatadogCloudWorkloadSecurityAgentRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogCloudWorkloadSecurityAgentRules resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isConstruct"></a>

```typescript
import { dataDatadogCloudWorkloadSecurityAgentRules } from '@cdktn/provider-datadog'

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformElement"></a>

```typescript
import { dataDatadogCloudWorkloadSecurityAgentRules } from '@cdktn/provider-datadog'

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformDataSource"></a>

```typescript
import { dataDatadogCloudWorkloadSecurityAgentRules } from '@cdktn/provider-datadog'

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport"></a>

```typescript
import { dataDatadogCloudWorkloadSecurityAgentRules } from '@cdktn/provider-datadog'

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogCloudWorkloadSecurityAgentRules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogCloudWorkloadSecurityAgentRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogCloudWorkloadSecurityAgentRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/cloud_workload_security_agent_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogCloudWorkloadSecurityAgentRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.agentRules">agentRules</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList">DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `agentRules`<sup>Required</sup> <a name="agentRules" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.agentRules"></a>

```typescript
public readonly agentRules: DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList">DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCloudWorkloadSecurityAgentRulesAgentRules <a name="DataDatadogCloudWorkloadSecurityAgentRulesAgentRules" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules.Initializer"></a>

```typescript
import { dataDatadogCloudWorkloadSecurityAgentRules } from '@cdktn/provider-datadog'

const dataDatadogCloudWorkloadSecurityAgentRulesAgentRules: dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules = { ... }
```


### DataDatadogCloudWorkloadSecurityAgentRulesConfig <a name="DataDatadogCloudWorkloadSecurityAgentRulesConfig" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.Initializer"></a>

```typescript
import { dataDatadogCloudWorkloadSecurityAgentRules } from '@cdktn/provider-datadog'

const dataDatadogCloudWorkloadSecurityAgentRulesConfig: dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/cloud_workload_security_agent_rules#id DataDatadogCloudWorkloadSecurityAgentRules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/cloud_workload_security_agent_rules#id DataDatadogCloudWorkloadSecurityAgentRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList <a name="DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer"></a>

```typescript
import { dataDatadogCloudWorkloadSecurityAgentRules } from '@cdktn/provider-datadog'

new dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.get"></a>

```typescript
public get(index: number): DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference <a name="DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer"></a>

```typescript
import { dataDatadogCloudWorkloadSecurityAgentRules } from '@cdktn/provider-datadog'

new dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules">DataDatadogCloudWorkloadSecurityAgentRulesAgentRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogCloudWorkloadSecurityAgentRulesAgentRules;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules">DataDatadogCloudWorkloadSecurityAgentRulesAgentRules</a>

---



