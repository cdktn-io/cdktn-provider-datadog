# `agentlessScanningGcpScanOptions` Submodule <a name="`agentlessScanningGcpScanOptions` Submodule" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningGcpScanOptions <a name="AgentlessScanningGcpScanOptions" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_gcp_scan_options datadog_agentless_scanning_gcp_scan_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer"></a>

```java
import io.cdktn.providers.datadog.agentless_scanning_gcp_scan_options.AgentlessScanningGcpScanOptions;

AgentlessScanningGcpScanOptions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gcpProjectId(java.lang.String)
    .vulnContainersOs(java.lang.Boolean|IResolvable)
    .vulnHostOs(java.lang.Boolean|IResolvable)
//  .complianceHost(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.gcpProjectId">gcpProjectId</a></code> | <code>java.lang.String</code> | The GCP project ID for which agentless scanning is configured. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.vulnContainersOs">vulnContainersOs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.vulnHostOs">vulnHostOs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.complianceHost">complianceHost</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if host compliance scanning is enabled. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.gcpProjectId"></a>

- *Type:* java.lang.String

The GCP project ID for which agentless scanning is configured.

Must be a valid GCP project ID: 6–30 characters, start with a lowercase letter, and include only lowercase letters, digits, or hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_gcp_scan_options#gcp_project_id AgentlessScanningGcpScanOptions#gcp_project_id}

---

##### `vulnContainersOs`<sup>Required</sup> <a name="vulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.vulnContainersOs"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_containers_os AgentlessScanningGcpScanOptions#vuln_containers_os}

---

##### `vulnHostOs`<sup>Required</sup> <a name="vulnHostOs" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.vulnHostOs"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_host_os AgentlessScanningGcpScanOptions#vuln_host_os}

---

##### `complianceHost`<sup>Optional</sup> <a name="complianceHost" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.complianceHost"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if host compliance scanning is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_gcp_scan_options#compliance_host AgentlessScanningGcpScanOptions#compliance_host}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.resetComplianceHost">resetComplianceHost</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComplianceHost` <a name="resetComplianceHost" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.resetComplianceHost"></a>

```java
public void resetComplianceHost()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AgentlessScanningGcpScanOptions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct"></a>

```java
import io.cdktn.providers.datadog.agentless_scanning_gcp_scan_options.AgentlessScanningGcpScanOptions;

AgentlessScanningGcpScanOptions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.agentless_scanning_gcp_scan_options.AgentlessScanningGcpScanOptions;

AgentlessScanningGcpScanOptions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.agentless_scanning_gcp_scan_options.AgentlessScanningGcpScanOptions;

AgentlessScanningGcpScanOptions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.agentless_scanning_gcp_scan_options.AgentlessScanningGcpScanOptions;

AgentlessScanningGcpScanOptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AgentlessScanningGcpScanOptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AgentlessScanningGcpScanOptions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AgentlessScanningGcpScanOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AgentlessScanningGcpScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_gcp_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AgentlessScanningGcpScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.complianceHostInput">complianceHostInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectIdInput">gcpProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOsInput">vulnContainersOsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOsInput">vulnHostOsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.complianceHost">complianceHost</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectId">gcpProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOs">vulnContainersOs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOs">vulnHostOs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `complianceHostInput`<sup>Optional</sup> <a name="complianceHostInput" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.complianceHostInput"></a>

```java
public java.lang.Boolean|IResolvable getComplianceHostInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gcpProjectIdInput`<sup>Optional</sup> <a name="gcpProjectIdInput" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectIdInput"></a>

```java
public java.lang.String getGcpProjectIdInput();
```

- *Type:* java.lang.String

---

##### `vulnContainersOsInput`<sup>Optional</sup> <a name="vulnContainersOsInput" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOsInput"></a>

```java
public java.lang.Boolean|IResolvable getVulnContainersOsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vulnHostOsInput`<sup>Optional</sup> <a name="vulnHostOsInput" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOsInput"></a>

```java
public java.lang.Boolean|IResolvable getVulnHostOsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `complianceHost`<sup>Required</sup> <a name="complianceHost" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.complianceHost"></a>

```java
public java.lang.Boolean|IResolvable getComplianceHost();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectId"></a>

```java
public java.lang.String getGcpProjectId();
```

- *Type:* java.lang.String

---

##### `vulnContainersOs`<sup>Required</sup> <a name="vulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOs"></a>

```java
public java.lang.Boolean|IResolvable getVulnContainersOs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vulnHostOs`<sup>Required</sup> <a name="vulnHostOs" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOs"></a>

```java
public java.lang.Boolean|IResolvable getVulnHostOs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningGcpScanOptionsConfig <a name="AgentlessScanningGcpScanOptionsConfig" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.agentless_scanning_gcp_scan_options.AgentlessScanningGcpScanOptionsConfig;

AgentlessScanningGcpScanOptionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gcpProjectId(java.lang.String)
    .vulnContainersOs(java.lang.Boolean|IResolvable)
    .vulnHostOs(java.lang.Boolean|IResolvable)
//  .complianceHost(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.gcpProjectId">gcpProjectId</a></code> | <code>java.lang.String</code> | The GCP project ID for which agentless scanning is configured. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnContainersOs">vulnContainersOs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnHostOs">vulnHostOs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.complianceHost">complianceHost</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if host compliance scanning is enabled. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.gcpProjectId"></a>

```java
public java.lang.String getGcpProjectId();
```

- *Type:* java.lang.String

The GCP project ID for which agentless scanning is configured.

Must be a valid GCP project ID: 6–30 characters, start with a lowercase letter, and include only lowercase letters, digits, or hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_gcp_scan_options#gcp_project_id AgentlessScanningGcpScanOptions#gcp_project_id}

---

##### `vulnContainersOs`<sup>Required</sup> <a name="vulnContainersOs" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnContainersOs"></a>

```java
public java.lang.Boolean|IResolvable getVulnContainersOs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_containers_os AgentlessScanningGcpScanOptions#vuln_containers_os}

---

##### `vulnHostOs`<sup>Required</sup> <a name="vulnHostOs" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnHostOs"></a>

```java
public java.lang.Boolean|IResolvable getVulnHostOs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_host_os AgentlessScanningGcpScanOptions#vuln_host_os}

---

##### `complianceHost`<sup>Optional</sup> <a name="complianceHost" id="@cdktn/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.complianceHost"></a>

```java
public java.lang.Boolean|IResolvable getComplianceHost();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if host compliance scanning is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/agentless_scanning_gcp_scan_options#compliance_host AgentlessScanningGcpScanOptions#compliance_host}

---



